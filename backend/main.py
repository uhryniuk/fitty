from fastapi import FastAPI, Path, Query
from pydantic import BaseModel
from typing import Annotated, Union

 fitty = FastAPI()

item_list = []

#@cool_app.get('/')
#async def root():
#    return {"message": "hello world"}
#
#@cool_app.get('/api/{info}')
#async def api_route(info : int):
#    return {"info": info}
#
#
#@cool_app.get('/query/')
#async def api_route(data : int = 0, barf : str = "gonzo"):
#    return f"<h1>{data} - {barf}</h1>"
#
## optional params
#@cool_app.get('/query-optional/')
#async def api_route(data : int = 123123, dork = None):
#    if dork:
#        return f"<h1>{data} - {dork}</h1>"
#    return f"<h1>{data}</h1>"
#
#@cool_app.post('/item/')
#def create_item(item: Item):
#    item_list.append(item)
#    print(item_list)
#    return item
#
## Inforce typing with Annotated, Query, Path and Union
## Makes this easier to ensure we are only getting the correct values.
#@cool_app.get("/items/{item_id}")
#async def read_items(
#    item_id: Annotated[int, Path(title="The ID of the item to get")],
#    q: Annotated[Union[str, None], Query(alias="item-query")] = None,
#):
#    results = {"item_id": item_id}
#    if q:
#        results.update({"q": q})
#    return results
#
