import geni.portal as portal
import geni.rspec.pg as rspec
import geni.rspec.igext as IG
from lxml import etree as ET

prefixForIP = "192.168.1."
currentIP = 1

# Create a Request object to start building the RSpec.
request = portal.context.makeRequestRSpec()
link = request.LAN("lan")

# Create a XenVM
node = request.XenVM("node")
node.disk_image = "urn:publicid:IDN+emulab.net+image+emulab-ops:UBUNTU18-64-STD"
node.routable_control_ip = "true"
iface = node.addInterface("if" + str(currentIP))
iface.component_id = "eth1"
iface.addAddress(rspec.IPv4Address(prefixForIP + str(currentIP), "255.255.255.0"))
currentIP = currentIP + 1
link.addInterface(iface)

node.addService(rspec.Execute(shell="/bin/sh", command="sudo apt update"))
node.addService(rspec.Execute(shell="/bin/sh", command="sudo apt install -y apache2"))
node.addService(rspec.Execute(shell="/bin/sh", command='sudo systemctl status apache2'))

# setup database
node = request.XenVM("database")
node.cores = 2
node.ram = 2048
node.routable_control_ip = "true" 
node.disk_image = "urn:publicid:IDN+emulab.net+image+emulab-ops:UBUNTU18-64-STD"
iface = node.addInterface("if" + str(currentIP))
iface.component_id = "eth1"
iface.addAddress(rspec.IPv4Address(prefixForIP + str(currentIP), "255.255.255.0"))
link.addInterface(iface)
node.addService(rspec.Execute(shell="sh", command="sudo bash /local/repository/setup_db.sh"))
currentIP = currentIP + 1


# Print the RSpec to the enclosing page.
portal.context.printRequestRSpec()
