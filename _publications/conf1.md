---
title: "A binary variational autoencoder for hashing"
collection: publications
category: conferences
permalink: /publication/conf1
excerpt: 'Information Retrieval, Hashing, Variational AutoEncoder, Text Data, Deep Learning.'
date: 2019-10-22
venue: 'Iberoamerican Congress on Pattern Recognition (CIARP)'
slidesurl: 'https://fmenat.github.io/files/conf1_slides.pdf'
citation: 'Mena, Francisco, and Ricardo Ñanculef. A binary variational autoencoder for hashing. Iberoamerican Congress on Pattern Recognition. Cham: Springer International Publishing, 2019.'
---
* Paper url: [DOI: 10.1007/978-3-030-33904-3_12](https://doi.org/10.1007/978-3-030-33904-3_12)
* Paper code: [github.com/fmenat/DiscreteVAE](https://github.com/fmenat/DiscreteVAE)

Searching a large dataset to find elements that are similar to a sample object is a fundamental problem in computer science. Hashing algorithms deal with this problem by representing data with similarity-preserving binary codes that can be used as indices into a hash table. Recently, it has been shown that variational autoencoders (VAEs) can be successfully trained to learn such codes in unsupervised and semi-supervised scenarios. In this paper, we show that a variational autoencoder with binary latent variables leads to a more natural and effective hashing algorithm that its continuous counterpart. The model reduces the quantization error introduced by continuous formulations but is still trainable with standard back-propagation. Experiments on text retrieval tasks illustrate the advantages of our model with respect to previous art.