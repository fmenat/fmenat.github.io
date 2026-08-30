---
title: "Increasing the robustness of model predictions to missing sensors in Earth observation"
collection: publications
category: conferences
permalink: /publication/conf8
excerpt: 'Earth observation, Multi-sensor learning, Missing sensors.'
date: 2026-06-07
venue: 'MACLEAN workshop at ECML-PKDD'
paperurl: 'https://fmenat.github.io/files/conf8.pdf'
slidesurl: 'https://fmenat.github.io/files/conf8_slides.pdf'
citation: 'Mena, Francisco, Diego Arenas, and Andreas Dengel. Increasing the robustness of model predictions to missing sensors in Earth observation. Joint European Conference on Machine Learning and Knowledge Discovery in Databases. Cham: Springer Nature Switzerland, 2024.'
header:
    teaser: conf8.png
---
* Paper url: [DOI: 10.1007/978-3-032-25311-8_14](https://doi.org/10.1007/978-3-032-25311-8_14)
* SensD technique: [url](https://github.com/fmenat/mvlearning#sensd-sensor-dropout)

![missing data](/images/conf8.png)


This work investigates strategies for improving the robustness of multi-sensor machine learning models to missing sensors in Earth Observation. It introduces two methods, Input Sensor Dropout (ISensD) and Ensemble Sensor Invariant (ESensI), designed to improve model generalization when sensor data become unavailable at inference time. Experiments across three multi-sensor temporal EO datasets evaluate performance degradation under different levels of sensor missingness. The results show that ensemble-based multi-sensor models provide the highest robustness to missing sensors, while the sensor dropout component of ISensD also demonstrates promising improvements. The study highlights sensor dropout and ensemble modeling as effective strategies for developing more reliable EO models under incomplete data conditions.
