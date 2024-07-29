### Schema for Cat Database

[DB Schema](https://github.com/eblaauw/kat.koppelvlak.com/blob/main/worker/src/interface.ts)

### Local set up

#### 1. Create a namespace

`wrangler kv:namespace create kat`

#### 2. Store data in the storage (locally)

```
wrangler kv:key put --binding=kat "abc1234e-89b1-42d3-b456-426614174111" '{
    "uuid": "abc1234e-89b1-42d3-b456-426614174111",
    "name": "Fluffy",
    "age": 5,
    "breed": "Maine Coon",
    "color": {
        "primary_color": "brown",
        "secondary_colors": ["black", "white"],
        "pattern": "tabby"
    },
    "gender": "female",
    "vaccination_status": {
        "rabies": "2022-08-15",
        "fvrcp": "2022-07-10"
    },
    "status": "owned"
}' --local
```

#### 3. Run the worker

```
wrangler dev
```

#### Open the browser

http://localhost:8787?uuid=abc1234e-89b1-42d3-b456-426614174111
