---
title: "Controlling the Quality of Distillation in Response-Based Network Compression, AAAI-2021 Workshop"
collection: AAAI-22 conference workshop
permalink: /publication/knowledge_distillation_AAAI-2022
excerpt: 'This paper delves deep into the theory of knowledge distillation in a teach-student pair network and discusses ways to perform better distillation to student network.'
date: 2021-12-19
venue: 'AAAI-22'
paperurl: 
citation:  
---
Index terms: Knowledge Distillation, Response-Based Model Compression, Distillation Hypothesis, Teacher-Student Learning.

[Download paper here](https://arxiv.org/abs/2112.10047)

[Master's thesis](http://vkvats.github.io/files/Vkvats_master_thesis.pdf)

Abstract: The performance of a distillation-based compressed network is governed by the quality of distillation. The reason for the suboptimal distillation of a large network (teacher) to a smaller network (student) is largely attributed to the gap in the learning capacities of a given teacher-student pair. While it is hard to distill all the knowledge of a teacher, the quality of distillation can be controlled to a large extent to achieve better performance. Our experiments show that the quality of distillation is largely governed by the quality of the teacher's response, which in turn is heavily affected by the presence of similarity information in its response. A well-trained large-capacity teacher loses similarity information between classes in the process of learning fine-grained discriminative properties for classification. The absence of similarity information causes the distillation process to be reduced from one example-many class learning to one example-one class learning, thereby throttling the flow of diverse knowledge from the teacher. With the implicit assumption that only the instilled knowledge can be distilled, instead of focusing only on the knowledge-distilling process, we scrutinize the knowledge-inculcation process. We argue that for a given teacher-student pair, the quality of distillation can be improved by finding the sweet spot between batch size and number of epochs while training the teacher. We discuss the steps to find this sweet spot for better distillation. We also propose the distillation hypothesis to differentiate the behavior of the distillation process between knowledge distillation and the regularization effect. We conducted all our experiments on three different datasets.

