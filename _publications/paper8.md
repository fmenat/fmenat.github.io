---
title: "On the quality of deep representations for Kepler light curves using variational auto-encoders"
collection: publications
category: manuscripts
permalink: /publication/paper8
excerpt: 'Deep Learning, Variational Autoencoder, Light Curves, Representation Learning, Time series data.'
date: 2021-10-14
venue: 'Signals'
paperurl: 'https://fmenat.github.io/files/paper8.pdf'
citation: 'Mena, Francisco, et al. "On the Quality of Deep Representations for Kepler Light Curves Using Variational Auto-Encoders." Signals 2.4 (2021): 706-728.'
header:
    teaser: paper8.png
---
* Paper url: [DOI: 10.3390/signals2040042](https://doi.org/10.3390/signals2040042)
* Code repository: [github.com/Buguemar/PIIC19/](https://github.com/Buguemar/PIIC19/tree/master/code/obj3)

![missing data](/images/paper8.png)

This work investigates variational auto-encoders (VAEs) for learning informative low-dimensional representations of astronomical light curves without relying on manually designed features. Two models, VRAEₜ and S-VRAEₜ, incorporate temporal differences between successive observations, with S-VRAEₜ additionally integrating flux-based rescaling into the learning process. Using the Kepler Mission transit light curve dataset, the study evaluates the learned representations through reconstruction quality, smoothness, disentanglement, and exoplanet classification. Results show that both methods improve representation quality compared with deterministic approaches, while S-VRAEₜ provides particularly strong performance, producing smooth and visually realistic reconstructions and representations that effectively capture meaningful structure for exoplanet characterization.
