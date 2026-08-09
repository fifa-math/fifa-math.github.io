# fifa-math organization handbook

> Shared operating defaults for repositories maintained under **fifa-math**. Repository-local policy may strengthen these rules but should not silently weaken them.

## Mission

fifa-math maintains football data modeling, mathematical analysis, simulation, ranking, and educational software. This `.github` repository is the canonical home for shared policy, reusable templates, community health files, and planning links.

## Repository contract

Each active repository must document purpose, ownership, maturity, supported data sources and environments, development and test commands, authoritative schemas and formulas, release and rollback procedures, compatibility policy, and GitHub Project/Linear links. Analytical components should also document data provenance and licensing, units, assumptions, uncertainty, random seeds, aggregation and ranking semantics, missing-data behavior, calibration, validation limits, and interpretation caveats.

## Change workflow

1. Anchor work in an issue, Linear item, or documented maintenance objective.
2. Keep branches and pull requests focused.
3. Explain motivation, formula or model impact, scope, validation, compatibility, migration, and rollback.
4. Test empty, missing, duplicate, extreme, historical, tie, boundary, deterministic replay, and numerical-tolerance paths as relevant.
5. Resolve conflicts semantically by reconstructing both sides' intent.
6. Prefer squash merges for focused work unless commit structure materially improves auditability.

## Evidence, security, and documentation

Pull requests should include reproducible commands, licensed fixtures, expected and observed outputs, baseline comparisons, tolerance rationale, negative-path coverage, documentation updates, and CI or local-equivalent evidence. Never commit credentials, restricted datasets, private records, or sensitive logs. Follow `SECURITY.md` for private reporting. Keep formulas, provenance, uncertainty, interpretation limits, and important model and compatibility decisions explicit.

## Planning ownership

GitHub owns code, reviews, checks, releases, and delivery evidence. Linear owns priority, dependencies, sequencing, and cross-project planning. The organization GitHub Project is the cross-repository execution view; see `PROJECTS.md` for routing details.

## Organization health

- [ ] Profiles, descriptions, topics, and READMEs are current.
- [ ] Community health files and reusable issue/PR guidance are present.
- [ ] Data provenance, formulas, assumptions, units, uncertainty, validation, and interpretation limits are documented.
- [ ] Required checks cover baseline correctness, numerical boundaries, determinism, compatibility, and supply-chain risk.
- [ ] Stale repositories are archived or clearly marked.
- [ ] GitHub Project and Linear links resolve and reflect completed work.
