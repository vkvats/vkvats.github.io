---
title: "GC-MVSNet: Multi-View, Multi-Scale, Geometrically-Consistent Multi-View Stereo"
collection: WACV 2024
permalink: /publication/gc-mvsnet
excerpt: 'This paper explores the explicit modeling of geometric constraints in multi-view stereo systems.'
date: 
venue: 'Accepted @WACV-24'
paperurl: 
citation: 
---
Index terms: Multi-View Stereo, Geometric Consistency, 3D Reconstruction.

[Download paper here](https://vkvats.github.io/files/gc-mvsnet-WACV24.pdf)

Abstract: Traditional multi-view stereo (MVS) methods rely heavily on
photometric and geometric consistency constraints, but
newer machine learning-based MVS methods check geometric
consistency across multiple source views only as a
post-processing step. In this paper, we present a novel 
approach that explicitly encourages
geometric consistency of reference view depth maps across
multiple source views at different scales during learning (see Fig. 1).
We find that adding this geometric consistency loss
significantly accelerates learning by explicitly
penalizing geometrically inconsistent pixels,  
reducing the training iteration requirements to nearly half
that of other MVS methods.
Our extensive experiments show that our approach 
achieves a new state-of-the-art on the DTU and
BlendedMVS datasets, and competitive results on the Tanks and
Temples benchmark. To the best of our knowledge,
GC-MVSNet is the first attempt to enforce multi-view, multi-scale 
geometric consistency during learning.
