### Schema for Cat Database

| **Field**          | **Type**     | **Description**                                     |
| ------------------ | ------------ | --------------------------------------------------- |
| uuid               | `str`        | Unique identifier for each cat.                     |
| name               | `str`        | The name of the cat.                                |
| age                | `int`        | The age of the cat.                                 |
| breed              | `str`        | The breed of the cat.                               |
| color              | `object`     | Object containing details about the cat's coloring. |
| - primary_color    | `str`        | The primary color of the cat's fur.                 |
| - secondary_colors | `list[str]`  | List of secondary colors.                           |
| - pattern          | `str`        | Pattern of the fur (e.g., solid, striped, spotted). |
| gender             | `str`        | The gender of the cat.                              |
| vaccination_status | `object`     | Information about the cat's vaccination status.     |
| - rabies           | `str (date)` | Date of rabies vaccination.                         |
| - fvrcp            | `str (date)` | Date of FVRCP vaccination.                          |
| status             | `str`        | Ownership status of the cat (e.g., feral, owned).   |

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
