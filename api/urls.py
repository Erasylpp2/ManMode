from django.urls import path
from .views import (
    get_categories, create_category, ProductList, ProductDetail,
    register_user, OrderListCreateView, ReviewListCreateView
)

urlpatterns = [
    path('categories/', get_categories),
    path('categories/create/', create_category),
    path('products/', ProductList.as_view()),
    path('products/<int:pk>/', ProductDetail.as_view()),
    path('register/', register_user),
    path('orders/', OrderListCreateView.as_view()),
    path('reviews/', ReviewListCreateView.as_view()),
]
