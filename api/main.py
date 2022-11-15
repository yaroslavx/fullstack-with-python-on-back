from typing import List
from pydantic import BaseModel
from fastapi import FastAPI

app = FastAPI()

class Person(BaseModel):
    id: int
    name: str
    age: int

DB: List[Person] = [
    Person(id=1, name='Random Name', age=1000),
    Person(id=2, name='Random Second Name', age=2000),
    Person(id=3, name='Random Third Name', age=3000)
    
    
]

@app.get("/api")
def read_root():
    return DB

