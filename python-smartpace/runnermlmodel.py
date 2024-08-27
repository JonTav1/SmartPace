#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Aug  1 20:42:06 2024

@author: jonathantavarez
"""



import pandas as pd
import numpy as np
import pickle
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
df=pd.read_csv('/Users/jonathantavarez/runner_scraped_data.csv')

df = df.replace('Male', 0)
df=df.replace('Female', 1)
df = df.replace('M', 0)
df = df.replace('F', 1)
df=df.replace('FEMALE',1)
df=df.replace('MALE', 0)

y=df['FINAL RESULT']
x=df.drop(['FINAL RESULT', 'PACE'], axis=1)
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=100)

rf = RandomForestRegressor(max_depth=None, random_state=100)
rf.fit(x_train, y_train)


#X = np.array([0,80 , 13.1]).reshape(1, -1)
filename = "runml_model.sav"
pickle.dump(rf, open(filename, 'wb'))
