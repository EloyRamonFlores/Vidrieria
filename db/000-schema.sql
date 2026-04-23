-- ============================================================
-- Celulares — Schema PostgreSQL + pgvector
-- Reutiliza patron multi-tenant de Eve (evelyn-dental)
-- Todas las tablas operativas llevan client_id
-- ============================================================

CREATE EXTENSION IF NOT EXISTS vector;

-- ============================================================
-- 1. clients_config — Config maestra (compartida con Eve)
-- ============================================================
CREATE TABLE IF NOT EXISTS clients_config (
  client_id       VARCHAR(50) PRIMARY KEY,
  clinic_name     TEXT,
  assistant_name  VARCHAR(100),
  instance_name   VARCHAR(100) UNIQUE,
  admin_phone     VARCHAR(50),
  calendar_id     VARCHAR(255),
  timezone        VARCHAR(50) DEFAULT 'America/Tijuana',
  webhook_path    VARCHAR(100),
  rag_collection  VARCHAR(100),
  doctor_name     TEXT,
  address         TEXT,
  google_maps_link TEXT,
  languages       VARCHAR(20) DEFAULT 'es',
  business_hours  JSONB,
  services        JSONB,
  active          BOOLEAN DEFAULT true,
  prompt_version  VARCHAR(20),
  features        JSONB,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 2. users — Numeros de telefono (compartida)
-- ============================================================
CREATE TABLE IF NOT EXISTS users (
  id            SERIAL PRIMARY KEY,
  client_id     VARCHAR(50) NOT NULL REFERENCES clients_config(client_id),
  phone_number  TEXT NOT NULL,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(phone_number, client_id)
);

-- ============================================================
-- 3. customers — Clientes/leads del negocio de celulares
-- ============================================================
CREATE TABLE IF NOT EXISTS customers (
  id            SERIAL PRIMARY KEY,
  client_id     VARCHAR(50) NOT NULL REFERENCES clients_config(client_id),
  user_id       INTEGER REFERENCES users(id),
  name          TEXT,
  phone_number  TEXT,
  device_model  TEXT,
  problem       TEXT,
  status        TEXT DEFAULT 'nuevo',
  last_intent   TEXT,
  notes         TEXT,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_customers_client ON customers(client_id);
CREATE INDEX IF NOT EXISTS idx_customers_phone ON customers(phone_number);
CREATE INDEX IF NOT EXISTS idx_customers_status ON customers(client_id, status);

-- ============================================================
-- 4. repair_jobs — Reparaciones con folio (KT-YYYY-NNNN)
-- ============================================================
CREATE TABLE IF NOT EXISTS repair_jobs (
  id              SERIAL PRIMARY KEY,
  client_id       VARCHAR(50) NOT NULL REFERENCES clients_config(client_id),
  customer_id     INTEGER REFERENCES customers(id),
  folio           VARCHAR(20) NOT NULL UNIQUE,
  device_model    TEXT,
  service_type    TEXT,
  problem_desc    TEXT,
  status          TEXT DEFAULT 'recibido',
  price           NUMERIC(10,2),
  warranty_days   INTEGER,
  warranty_end    DATE,
  received_at     TIMESTAMPTZ DEFAULT NOW(),
  estimated_done  TIMESTAMPTZ,
  completed_at    TIMESTAMPTZ,
  delivered_at    TIMESTAMPTZ,
  notes           TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_repairs_client ON repair_jobs(client_id);
CREATE INDEX IF NOT EXISTS idx_repairs_folio ON repair_jobs(folio);
CREATE INDEX IF NOT EXISTS idx_repairs_status ON repair_jobs(client_id, status);

-- ============================================================
-- 5. interaction_logs — Mensajes WhatsApp/chat web
-- ============================================================
CREATE TABLE IF NOT EXISTS interaction_logs (
  id            SERIAL PRIMARY KEY,
  client_id     VARCHAR(50) NOT NULL REFERENCES clients_config(client_id),
  user_id       INTEGER REFERENCES users(id),
  phone_number  TEXT,
  channel       TEXT DEFAULT 'whatsapp',
  message_type  TEXT DEFAULT 'text',
  user_message  TEXT,
  ai_response   TEXT,
  status        TEXT DEFAULT 'success',
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_interactions_client ON interaction_logs(client_id);
CREATE INDEX IF NOT EXISTS idx_interactions_created ON interaction_logs(created_at);

-- ============================================================
-- 6. follow_ups — Follow-ups automaticos
-- ============================================================
CREATE TABLE IF NOT EXISTS follow_ups (
  id              SERIAL PRIMARY KEY,
  client_id       VARCHAR(50) NOT NULL REFERENCES clients_config(client_id),
  user_id         INTEGER REFERENCES users(id),
  phone_number    TEXT,
  customer_name   TEXT,
  trigger_reason  TEXT,
  hours_delay     INTEGER DEFAULT 24,
  scheduled_at    TIMESTAMPTZ,
  sent_at         TIMESTAMPTZ,
  message         TEXT,
  status          TEXT DEFAULT 'pending',
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_followups_status ON follow_ups(client_id, status);
CREATE INDEX IF NOT EXISTS idx_followups_scheduled ON follow_ups(scheduled_at);

-- ============================================================
-- 7. handoff_requests — Transferencia a humano
-- ============================================================
CREATE TABLE IF NOT EXISTS handoff_requests (
  id                    SERIAL PRIMARY KEY,
  client_id             VARCHAR(50) NOT NULL REFERENCES clients_config(client_id),
  phone_number          VARCHAR(50),
  customer_name         VARCHAR(255),
  reason                TEXT,
  conversation_summary  TEXT,
  status                VARCHAR(20) DEFAULT 'pending',
  notified_at           TIMESTAMPTZ,
  resolved_at           TIMESTAMPTZ,
  resolved_by           VARCHAR(255),
  created_at            TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 8. RAG — Vectores para knowledge base
-- ============================================================
CREATE TABLE IF NOT EXISTS rag_documents (
  id              SERIAL PRIMARY KEY,
  collection_name VARCHAR(100) NOT NULL,
  content         TEXT NOT NULL,
  metadata        JSONB,
  embedding       vector(1536),
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_rag_collection ON rag_documents(collection_name);

-- ============================================================
-- 9. message_dedup — Deduplicacion webhooks
-- ============================================================
CREATE TABLE IF NOT EXISTS message_dedup (
  message_id  TEXT PRIMARY KEY,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- 10. error_logs — Errores de workflow
-- ============================================================
CREATE TABLE IF NOT EXISTS error_logs (
  id              SERIAL PRIMARY KEY,
  client_id       VARCHAR(50),
  workflow_name   VARCHAR(255),
  node_name       VARCHAR(255),
  error_message   TEXT,
  execution_id    VARCHAR(100),
  created_at      TIMESTAMPTZ DEFAULT NOW()
);
