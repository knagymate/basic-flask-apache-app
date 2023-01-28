from app import Guest, User, app

with app.app_context():
    users_json = {}
    guests = Guest.query.all()
    users = User.query.all()
    user_jsons = []
    for user in users:
        user_json = {
            "id": user.id,
            "guests": [],
            "name": user.name,
            "email": user.email,
            "is_join": user.is_join,
            "shuttle_num": user.shuttle_num if user.is_shuttle else 0,
            "food_comment": user.food_comment if user.is_food else "",
            "hotel_num": user.hotel_num if user.is_hotel else 0,
            "comment": user.comment,
        }
        user_jsons.append(user_json)
        for guest in guests:
            if guest.user_id == user.id:
                user_jsons.append(
                    {"id": guest.id, "name": guest.name, "age": guest.age}
                )
    import json

    print(json.dumps(user_jsons))
