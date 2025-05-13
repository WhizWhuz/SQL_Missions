-- ? SQL PRACTICING -- 🥷

-- SELECT w.name, m.title, m.reward,
-- SUM(CAST(REGEXP_REPLACE(m.reward, '[^0-9]', '', 'g') AS INTEGER)) AS mission_gold
-- FROM missions AS m
-- JOIN warriors AS w
-- ON m.warrior_id = w.id
-- WHERE m.reward ILIKE '%gold%'
-- GROUP BY w.name, m.title, m.reward

-- SELECT m.title, w.name, m.reward, w.clan
-- FROM missions AS m
-- JOIN warriors AS w
-- ON m.warrior_id = w.id
-- WHERE m.reward ILIKE '%100%;

-- *REGEXP
-- SELECT ...,
-- REGEXP_REPLACE(..., '[^0-9]', '', 'g') AS raw_gold,
-- CAST(REGEXP_REPLACE(...,'[^0-9]', '', 'g') AS INTEGER) AS ..._...
-- FROM ... AS .
-- WHERE ...


-- SELECT AVG(difficulty), w.name, m.title, w.clan
-- FROM missions AS m
-- JOIN warriors AS w
-- ON m.warrior_id = w.id
-- WHERE w.clan = 'ShadowFox'
-- GROUP BY w.name, w.clan, m.title

-- SELECT MAX(reward), m.title, m.reward
-- FROM missions AS m 
-- GROUP BY m.title, m.reward;
