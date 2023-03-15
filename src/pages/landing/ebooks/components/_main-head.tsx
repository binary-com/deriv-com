import React from 'react'
import { Helmet } from 'react-helmet'

function MainHead() {
    return (
        <Helmet>
            <style type="text/css">{`
              .async-hide { opacity: 0 !important }
            `}</style>
            <script type="text/javascript">{`
              (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
              h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
              (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
              })(window,document.documentElement,'async-hide','dataLayer',2000,
              {'CONTAINER_ID':'OPT-MW2DHKZ'});
          `}</script>
        </Helmet>
    )
}

export default MainHead
