#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Jul 30 22:36:50 2024

@author: jonathantavarez
"""
def new_pace(weight, gender, pace):
    avg_weight = 140
    weight = 160
    weight_diff= weight-avg_weight
    pace = 600
    adj_pace = pace * (1 + (weight_diff/10) * .05)
    print(adj_pace)