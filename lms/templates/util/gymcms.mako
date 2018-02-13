<%def name="render(templateUrl)">
  <% import urllib2 %>
  <% from django.conf import settings %>
  %if templateUrl:
    %if settings.FEATURES.get('ENVIRONMENT') == "staging":
      ${urllib2.urlopen('https://staging.gymcms.xyz/static/' + templateUrl).read()}
    %elif settings.FEATURES.get('ENVIRONMENT') == "production":
      ${urllib2.urlopen('https://gymcms.xyz/static/' + templateUrl).read()}
    %endif
  %endif
</%def>