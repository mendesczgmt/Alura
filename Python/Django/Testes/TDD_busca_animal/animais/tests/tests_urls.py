from django.test import TestCase, RequestFactory
from django.urls import reverse
from animais.views import index

class AnimaisURLSTesteCase(TestCase):

    def setUp(self):
        self.factory = RequestFactory()
    
    def test_RotaUrlUtilizaViewIndex(self):
        request = self.factory.get('/')
        response = index(request)
        self.assertEqual(response.status_code, 200)