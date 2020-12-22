# import the module
import pyqrcode

# define the data
data = 'http://bhc.edu.in/'

# create qrcode
img = pyqrcode.create(data)

# save the qrcode in png format with proper scaling
img.png('bi.png', scale=10)
