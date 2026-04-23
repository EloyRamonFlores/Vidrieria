-- =============================================
-- INSERT clients_config — Cliente: vidrieria
-- =============================================
-- Ejecutar DESPUÉS de tener datos reales del cliente.
-- Reemplazar todos los [PLACEHOLDER] con valores reales.
--
-- Uso:
--   psql $PG_URL -f packages/clients/vidrieria/db/001-insert-config.sql
-- =============================================

INSERT INTO clients_config (
  client_id,
  clinic_name,
  assistant_name,
  instance_name,
  admin_phone,
  calendar_id,
  timezone,
  webhook_path,
  rag_collection,
  doctor_name,
  address,
  google_maps_link,
  languages,
  business_hours,
  services,
  active,
  prompt_version,
  features
) VALUES (
  'vidrieria',
  'Vidriería del Centro',                          -- ej: 'Vidriería del Centro'
  'Eva',
  'vidrieria-bot',                                  -- nombre instancia Evolution API
  '521XXXXXXXXXX@s.whatsapp.net',                   -- WhatsApp del dueño (admin)
  '',                                                -- sin Google Calendar (vidrieria no usa calendario)
  'America/Tijuana',                                 -- ajustar si es otra zona
  'webhook-vidrieria',                               -- path del webhook en n8n
  'vidrieria_servicios',                             -- collection name para RAG
  'Juan Martínez',                              -- dueño/contacto principal
  'Av. Paseo de Tijuana 5000, Tijuana, B.C. 22010',                            -- ej: 'Av. Juárez 123, Rosarito, B.C.'
  'https://maps.app.goo.gl/example',                              -- ej: 'https://maps.app.goo.gl/...'
  'es',                                              -- español (cambiar a 'es,en' si bilingüe)
  '{
    "lunes_viernes": "9:00 AM - 7:00 PM",
    "sabado": "10:00 AM - 5:00 PM",
    "domingo": "cerrado"
  }'::jsonb,
  '{
    "cambio_pantalla": {"descripcion": "Cambio de pantalla", "min": 500, "max": 2500, "garantia": "30 dias"},
    "cambio_bateria": {"descripcion": "Cambio de batería", "min": 250, "max": 800, "garantia": "30 dias"},
    "reparacion_software": {"descripcion": "Reparación de software", "min": 200, "max": 500, "garantia": "15 dias"},
    "dano_liquidos": {"descripcion": "Reparación por daño de líquidos", "min": 500, "max": 1500, "garantia": "sin garantia"},
    "centro_carga": {"descripcion": "Cambio de centro de carga", "min": 300, "max": 700, "garantia": "30 dias"},
    "recuperacion_datos": {"descripcion": "Recuperación de datos", "min": 500, "max": 2000, "garantia": "sin garantia"}
  }'::jsonb,
  true,
  '1.0.0',
  '{
    "folio_tracking": true,
    "calendario": false,
    "bilingue": false,
    "follow_up": true,
    "handoff": true,
    "reporte_diario": false,
    "reactivacion": false,
    "encuestas": false,
    "chat_web": true
  }'::jsonb
)
ON CONFLICT (client_id) DO UPDATE SET
  clinic_name = EXCLUDED.clinic_name,
  assistant_name = EXCLUDED.assistant_name,
  services = EXCLUDED.services,
  business_hours = EXCLUDED.business_hours,
  features = EXCLUDED.features,
  active = EXCLUDED.active;

-- Verificar
SELECT client_id, clinic_name, assistant_name, active, features
FROM clients_config
WHERE client_id = 'vidrieria';
