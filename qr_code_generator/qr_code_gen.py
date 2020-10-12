# import the module
import pyqrcode

# define the data
data = 'https://github.com/Ravi-Rsankar/Ravi-Rsankar'

# create qrcode
img = pyqrcode.create(data)

# save the qrcode in png format with proper scaling
img.png('github.png', scale=10)
