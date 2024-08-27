#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Aug  1 21:15:44 2024

@author: jonathantavarez
"""

import numpy as np
import pickle


def ml_pace_pred(age, gender, distance):
    if gender == 'Male':
        gender = 0
    else:
        gender = 1
    model = pickle.load(open("runml_model.sav", 'rb'))
    X = np.array([gender,age ,distance]).reshape(1, -1)
    result = model.predict(X).item()
    return result