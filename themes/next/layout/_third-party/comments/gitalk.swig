{% if page.comments && theme.gitalk.enable %}

  <link rel="stylesheet" href="{{ theme.gitalk.link_css }}">
  <script src="{{ theme.gitalk.link_js }}"></script>

   <script type="text/javascript">
        var gitalk = new Gitalk({
          clientID: '{{ theme.gitalk.ClientID }}',
          clientSecret: '{{ theme.gitalk.ClientSecret }}',
          repo: '{{ theme.gitalk.repo }}',
          owner: '{{ theme.gitalk.owner }}',
          admin: {{ theme.gitalk.adminUser }},
          id: {{ theme.gitalk.ID }},
          labels: {{ theme.gitalk.labels }},
          perPage: {{ theme.gitalk.perPage }},
          pagerDirection: '{{ theme.gitalk.pagerDirection }}',
          createIssueManually: {{ theme.gitalk.createIssueManually }},
          distractionFreeMode: {{ theme.gitalk.distractionFreeMode }},
          proxy: {{ theme.gitalk.proxy}}
        })
        gitalk.render('gitalk-container')           
       </script>
{% endif %}
