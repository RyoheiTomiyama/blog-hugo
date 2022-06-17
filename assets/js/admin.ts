import CMS from 'netlify-cms-app'
// import PostPreview from './admin/components/previews/post';

// Initialize the CMS object
CMS.init()
// // Now the registry is available via the CMS object.
// CMS.registerPreviewTemplate('post', PostPreview)

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    console.log('hoge')
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}