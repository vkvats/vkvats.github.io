---
title: "Learning Case Features with Proxy-Guided Deep Neural Networks, Accepted at ICCBR-2025"
collection: ICCBR 2025
permalink: /publication/proxy2025iccbr
excerpt: 'This paper explores various proxy function that can be integrated with deep learning frameworks to learn image features more suitable for a case-based reasoning (CBR) systems'
date: 2025-3-09
venue: 'International Conference on Cased-Based Reasoning (ICCBR)'
paperurl: 
citation: 
---
Index terms: Case based reasoning, Deep Learning, DL-CBR integration.


Abstract: Effective case retrieval depends critically on high-quality indices.  The cost and difficulty of acquiring case features 
motivates interest in machine learning for feature acquisition.  For computer vision domains, manual feature extraction has proven 
infeasible, but previous studies have shown the effectiveness of extracting features from deep neural models 
    for case-based classification. Such approaches have generally been based on training the network for stand-alone classification 
    accuracy, under the assumption that effective classification reflects high quality network features.   
    However, it is not clear that the features best suited to network processing will be best for CBR.  
    In response, this paper proposes refining previous network feature extraction approaches by adapting network training 
    to reflect the goal of using network features for CBR. Specifically, it proposes augmenting conventional 
    cross-entropy loss with a proxy term that reflects how the CBRsystem will use extracted features for similarity assessment.
    To this end, we investigate 
    using Pairwise Distance, Cosine Similarity, and Sinkhorn Divergence 
    as proxy functions within a triplet loss training framework. 
    Evaluations on the benchmark image classification datasets MNIST, Animals with Attributes 2, and CIFAR-10 support 
    the effectiveness of this method, with an integrated case-based classification system using the extracted features 
    outperforming the feature extraction network applied end-to-end as well as integrated models developed in our previous research.
