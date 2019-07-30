`GET /api/questions` will return all of the questions in the application. A question will have:

    {
      id: *integer*,
      content: *string*,
      topic: *string*,
      imageUrl: *string/nullable*,
      updated_at: *datetime*,
      user_id: *integer*
    }

`GET /api/questions?search=*topic*` will return all questions with the matching topic. Topic is not case sensitive but for now only accepts whole words spelled correctly.

`POST /api/questions` will return the posted question if successful. Question should be posted as:

    {
      user_id: *integer/notNullable*,
      content: *string/notNullable/Unique*,
      topic: *string/notNullable*,
      imageUrl: *string/nullable*
    }

`PUT /api/questions/*id*` will return the updated object. Any combination of the fields from the `POST /api/questions` can be sent.

`DELETE /api/questions/*id*` will remove the question with the matching id from the database and return a JSON object with a custom message:

    {
      message: "This question: '*question content*', was deleted."
    }
