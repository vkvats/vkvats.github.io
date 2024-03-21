---
title: "Extracting Indexing Features for CBR from Deep Neural Networks: A Transfer Learning Approach, Accepted at ICCBR-2024"
collection: ICCBR 2024
permalink: /publication/Extracting2024iccbr
excerpt: 'This paper explores the integration of CBR system with pre-trained DL models.'
date: 2024-3-18
venue: 'ICCBR-24'
paperurl: 
citation: 
---
Index terms: Case based reasoning, Deep Learning, DL-CBR integration.

#[Download paper here](http://vision.soic.indiana.edu/papers/examining2023iccbr.pdf)

Abstract: High-quality indices are essential for accurate retrieval in case-based reasoning.  However, in some domains, indexing knowledge may be incomplete, unavailable, or unfeasible to obtain by knowledge acquisition, making knowledge-light machine learning methods an appealing alternative for generating indexing features.  In response, previous work has developed promising methods for extracting indexing features from deep neural networks trained on case data.
However, it has also underlined that \acrshort{cbr} using features extracted from a deep neural network achieves low accuracy in domains for which the network itself has low accuracy when trained from scratch.  This is a special concern for \acrshort{cbr} feature extraction because  the ability of \acrshort{cbr} to reason successfully in ``small data" domains has been seen as one of its benefits.   This paper reports on work investigating the hypothesis that transfer learning may help decrease the data requirements for index extraction.   Specifically, it examines how model pretraining affects the quality of extracted indexing features for case-based classification, measured by the performance of a case-based classifier using those features for retrieval. Experimental results suggest that using a pretrained deep learning model for feature extraction can improve classification accuracy and consistency compared to using similar models trained from scratch.  Furthermore, an unexpected and intriguing result is that the case-based classifier using extracted features outperformed analogous deep learning classifiers for the tested dataset.
