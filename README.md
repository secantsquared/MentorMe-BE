1. `GET /api/questions` will return all of the questions in the application. A question will have:

    {
      id: *integer*,
      content: *string*,
      topic: *string*,
      imageUrl: *string/nullable*,
      updated_at: *datetime*
    }

2. `GET /api/questions?search=*topic*` will return all questions with the matching topic. Topic is not case sensitive but for now only accepts whole words spelled correctly.

3. `POST /api/questions` will return the posted question if successful. Question should be posted as:

    {
      user_id: *integer/notNullable*,
      content: *string/notNullable/Unique*,
      topic: *string/notNullable*,
      imageUrl: *string/nullable*
    }
