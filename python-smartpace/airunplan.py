#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Jul 30 22:19:06 2024

@author: jonathantavarez
"""


from openai import OpenAI
import os


def aiplan(distance, duration):
    client = OpenAI(
        # This is the default and can be omitted
        api_key = os.environ.get("OPENAI_API_KEY"))

    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": "Write me a weekly a running plan for a " + distance + " mile race in, for someone that wants to run a " + duration + 
                " hour race. be sure to include mileage. Format it nicely",
                }
            ],
        model="gpt-3.5-turbo",)
    response = chat_completion.choices[0].message.content
  
    return response
    