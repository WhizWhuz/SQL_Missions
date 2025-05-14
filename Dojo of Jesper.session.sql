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

-- *REGEXP --
-- SELECT ...,
-- REGEXP_REPLACE(..., '[^0-9]', '', 'g') AS raw_gold,
-- CAST(REGEXP_REPLACE(...,'[^0-9]', '', 'g') AS INTEGER) AS ..._...
-- FROM ... AS .
-- WHERE ...


-- SELECT w.name, m.title, w.clan, AVG(difficulty) AS mission_difficulty
-- FROM missions AS m
-- JOIN warriors AS w
-- ON m.warrior_id = w.id
-- WHERE w.clan = 'ShadowFox'
-- GROUP BY w.name, w.clan, m.title

-- SELECT m.title, m.reward, MAX(reward) AS max_mission
-- FROM missions AS m 
-- GROUP BY m.title, m.reward;

-- !KATA 1
-- SELECT w.name, m.reward,
-- SUM(CAST(REGEXP_REPLACE(m.reward, '[^0-9]', '', 'g') AS INTEGER)) AS total_gold
-- FROM missions AS m
-- JOIN warriors AS w
-- ON m.warrior_id = w.id
-- GROUP BY w.name, m.reward

--! KATA 2
-- SELECT m.reward
-- FROM missions AS m
-- ORDER BY CAST(REGEXP_REPLACE(m.reward, '[^0-9]', '', 'g')AS INTEGER) DESC
-- LIMIT 1

--? KATA 3
-- SELECT w.clan, AVG(difficulty)
-- FROM missions AS m
-- JOIN warriors AS w
-- ON m.warrior_id = w.id
-- GROUP BY w.clan, m.difficulty

--* KATA 4
-- SELECT  w.name, m.title, m.reward
-- FROM missions AS m
-- JOIN warriors AS w
-- ON m.warrior_id = w.id
-- WHERE m.title ILIKE '%scroll%'

-- ! KATA 5
-- SELECT w.clan, COUNT(*)
-- FROM warriors AS w
-- GROUP BY w.clan