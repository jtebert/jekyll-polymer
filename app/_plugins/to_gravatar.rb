# Automatically pull Gravatar images using an author's email address
# Taken from: https://blog.sorryapp.com/blogging-with-jekyll/2014/02/13/add-author-gravatars-to-your-jekyll-site.html

require 'digest/md5'

module Jekyll
  module GravatarFilter
    def to_gravatar(input, size=32)
        def_img = Jekyll.configuration({})['url'] + Jekyll.configuration({})['baseurl'] + '/images/default-gravatar.png'

      "//www.gravatar.com/avatar/#{hash(input)}?s=#{size}&default=" + def_img
    end

    private :hash

    def hash(email)
      email_address = email ? email.downcase.strip : ''
      Digest::MD5.hexdigest(email_address)
    end
  end
end

Liquid::Template.register_filter(Jekyll::GravatarFilter)
