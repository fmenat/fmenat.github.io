---
title: "Multi-sensor model for Earth observation robust to missing data via sensor dropout and mutual distillation"
collection: publications
category: manuscripts
permalink: /publication/paper3
excerpt: 'Multi-sensor model, Earth observation, Robustness, Multi-task learning, Mutual distillation.'
date: 2025-04-09
venue: 'IEEE Access'
paperurl: 'https://fmenat.github.io/files/paper3.pdf'
citation: 'Mena, Francisco, et al. "Multi-sensor model for earth observation robust to missing data via sensor dropout and mutual distillation." IEEE Access 13 (2025): 83930-83943.'
header:
    teaser: paper3.png
---
* Paper url: [DOI: 10.1109/ACCESS.2025.3568706](https://doi.org/10.1109/ACCESS.2025.3568706)
* Paper code: [github.com/fmenat/dsensdp](https://github.com/fmenat/dsensdp)

![missing data](/images/paper3.png)

This work introduces DSensD+, a multi-sensor modeling framework designed to improve robustness to missing sensor data in Earth Observation (EO). The method combines decision-level sensor dropout with mutual distillation, enabling models to maintain reliable predictions when one or more sensors are unavailable at inference time. Unlike conventional sensor dropout approaches applied at the input or feature level, DSensD+ operates at the decision level and requires no additional components during inference. Experiments across three EO datasets covering binary, multi-class, and multi-label crop- and tree-mapping tasks demonstrate consistent improvements over state-of-the-art methods under full-sensor, moderate missing-sensor, and extreme single-sensor scenarios.
