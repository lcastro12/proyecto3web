
import { ValidatedMethod } from 'meteor/mdg:validated-method';



export const likeImage = new ValidatedMethod({
  name: 'likeImage',
  validate: new SimpleSchema({
    identi: { type: String },
    liked:{type: Boolean}
  }).validator(),
  run({ identi,liked }) {

		if(!Meteor.userId())
		{
			throw new Meteor.Error('not-authenticated')
		}
		if(liked)
		{
			Imagenes.update(identi, {$inc: { likes:1}});
			Imagenes.update(identi, {$inc: { votos:1}});
		
		}
		else
		{
			Imagenes.update(identi, {$inc: { dislikes:1}});
			Imagenes.update(identi, {$inc: { votos:-1}});

		}
}
  
});

var validUrl = require('valid-url');


export const addImagen = new ValidatedMethod({
  name: 'addImagen',
  validate: new SimpleSchema({
    url: { type: String },
    snippet:{type: String},
    title:{type: String}
  }).validator(),
  run({ url,snippet,title }) {

		if(!Meteor.userId())
		{
			throw new Meteor.Error('not-authenticated')
		}
		if(!validUrl.isUri(url))
		{
			throw new Meteor.Error('not-url')
		}
		console.log("Adding "+ url+" "+ snippet+" "+ title)

			Imagenes.insert({
			url:url,
			title:title,
			snippet:snippet,
			createdAt: new Date(),
			user:Meteor.userId(),
			likes:0,
			disLikes:0,
			votos:0
		});
		
		}
  
});

// Get list of all method names on Lists
const LISTS_METHODS = _.pluck([
  likeImage,
  addImagen,
], 'name');
// Only allow 5 list operations per connection per second
if (Meteor.isServer) {
  DDPRateLimiter.addRule({
    name(name) {
      return _.contains(LISTS_METHODS, name);
    },
    // Rate limit per connection ID
    connectionId() { return true; }}, 5, 1000);
}
 // Muy bueno que realicen estas validaciones
