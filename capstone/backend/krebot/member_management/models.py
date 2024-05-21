from django.db import models

class Member(models.Model):
    member_id = models.AutoField(primary_key=True)
    email = models.EmailField(unique=True, null=False)
    password = models.CharField(max_length=255, null=False)

    LANGUAGE_CHOICES = (
        ('ko', 'Korean'),
        ('en', 'English'),
        ('ja', 'Japanese'),
        ('zh', 'Chinese'),
    )
    language = models.CharField(max_length=2, choices=LANGUAGE_CHOICES)

    class Meta:
        db_table = 'member'

class RestaurantInfo1(models.Model):
    restaurant_id = models.AutoField(primary_key=True)
    restaurant_name = models.CharField(max_length=255, null=False)
    icon_path = models.CharField(max_length=255)

    class Meta:
        db_table = 'restaurant_info1'


class Bookmark(models.Model):
    member_id = models.ForeignKey(Member, on_delete=models.CASCADE)
    restaurant_id = models.ForeignKey(RestaurantInfo1, on_delete=models.CASCADE)
    bookmarked_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('member_id', 'restaurant_id')
        db_table = 'bookmark'


class RestaurantBookmarkCount(models.Model):
    restaurant_id = models.OneToOneField(RestaurantInfo1, on_delete=models.CASCADE)
    bookmark_count = models.IntegerField(default=0)

    class Meta:
        db_table = 'restaurant_bookmark_count'