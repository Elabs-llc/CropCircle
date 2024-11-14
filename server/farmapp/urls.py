from django.urls import path
from .views import OrderDetailView, UpdateOrderStatusView, DeleteOrderView

urlpatterns = [
    # URL for retrieving order details
    path("api/farmer/<int:farmerId>/orders/<int:orderId>", OrderDetailView.as_view(), name="order-detail"),
    
    # URL for updating order status
    path("api/farmer/<int:farmerId>/orders/<int:orderId>/status", UpdateOrderStatusView.as_view(), name="update-order-status"),
    
    # URL for deleting an order (or marking it as cancelled, depending on logic)
    path("api/farmer/<int:farmerId>/orders/<int:orderId>/delete", DeleteOrderView.as_view(), name="delete-order"),
]
