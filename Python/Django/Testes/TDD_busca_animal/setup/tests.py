from django.test import LiveServerTestCase
from selenium import webdriver

class AnimaisTestCase(LiveServerTestCase):
    def setUp(self):
        self.browser = webdriver.Chrome()

    def tearDown(self):
        self.browser.quit()

    def test_BuscandoUmNovoAnimal(self):
        home_page = self.browser.get(self.live_server_url + '/')
        brand_element = self.browser.find_element_by_css_Selector('.navbar')
        self.assertEqual('Busca Animal', brand_element.text)