import AccessLevel from './model';

export default {
  get(request, h) {
    return AccessLevel.where(
      'id',
      encodeURIComponent(request.params.id)
    ).fetch().then(function(accessLevel) {
      return accessLevel.toJSON();
    }).catch(function(err) {
      console.error(err);
    });
  }
};
