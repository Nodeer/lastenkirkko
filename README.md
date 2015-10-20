# Lastenkirkko

Lastenkirkko.fi web application.

# Installation

Do the following to set up your environment:

- Install [Virtualbox](https://www.virtualbox.org/wiki/Downloads) and [Vagrant](http://www.vagrantup.com/downloads.html)
- Run `vagrant up && vagrant ssh` to create and connect to the virtual machine
- Add an entry for `192.168.80.80` to `lastenkirkko.dev` in your hosts file
- Open your browser and go to `http://lastenkirkko.dev` to see the application
- Follow [app/README.md](client/README.md) to complete the installation

# Troubleshooting

- If you get an error related to mismatching vbhost versions install the [vbguest plugin](https://github.com/dotless-de/vagrant-vbguest) by running `vagrant plugin install vagrant-vbguest` and try again

If you run into other issues contact `@christoffer.niska` on Slack (@email)
