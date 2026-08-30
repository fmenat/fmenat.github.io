---
title: "Missing data as augmentation in the Earth Observation domain: A multi-view learning approach"
collection: publications
category: manuscripts
permalink: /publication/paper4
excerpt: 'Multi-view learning, Data augmentation, Robustness, Earth observation, Missing data.'
date: 2025-07-14
venue: 'Neurocomputing'
paperurl: 'https://fmenat.github.io/files/paper4.pdf'
doiurl: '10.1016/j.neucom.2025.130175'
codeurl: 'github.com/fmenat/CoM-views'
citation: 'Mena, Francisco, Diego Arenas, and Andreas Dengel. "Missing data as augmentation in the Earth observation domain: A multi-view learning approach." Neurocomputing 638 (2025): 130175.'
header:
    teaser: paper4.png
---

This work introduces a multi-view learning (MVL) approach that treats missing data as an augmentation strategy to improve model robustness in Earth Observation (EO). The proposed methods simulate different combinations of missing views during training, allowing models to learn from varying data availability without relying on numerical replacements for missing inputs. Instead, dynamic merge functions, including averaging and Transformer-based approaches, enable the model to ignore unavailable views adaptively. Experiments across four EO datasets with temporal and static views show improved robustness under moderate missing-view conditions while also enhancing predictive performance when all views are available. The approach provides a unified solution for arbitrary combinations of available views.
