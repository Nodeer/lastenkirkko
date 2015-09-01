# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

ENV['VAGRANT_DEFAULT_PROVIDER'] = 'virtualbox'

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

  config.vm.box = "nordsoftware/nginx-php-mariadb-nvm"
  config.vm.network "private_network", ip: "192.168.80.80"
  config.vm.network "forwarded_port", guest: 8006, host: 8006
  config.vm.synced_folder ".", "/vagrant", disabled: true
  config.vm.synced_folder "./app", "/app"
  config.vm.synced_folder "./sites", "/etc/nginx/sites-enabled"
  config.vm.provision "shell", inline: "sudo service nginx restart", run: "always"

  config.vm.provider "virtualbox" do |vb|
    vb.name = "lastenkirkko"
  end

end
