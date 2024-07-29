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
