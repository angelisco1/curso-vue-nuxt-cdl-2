export default (context) => {
  if (context.route.name !== 'index') {
    // Aqui comprobamos si tenemos token
    if (!context.app.$auth.miToken) {
      context.redirect('/');
    }
  }
}