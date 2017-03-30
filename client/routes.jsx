import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout';
import ImagenesWrapper from '../imports/imagenes/ImagenesWrapper';
import ImageForm from '../imports/imagenes/ImageForm';
import ImagenesPersonal from '../imports/imagenes/ImagenesPersonal';

FlowRouter.route('/',{
	action()
	{
		mount(MainLayout,{
			content: (<ImagenesWrapper />)
		})
	}
});

FlowRouter.route('/upload',{
	action()
	{
		mount(MainLayout,{
			content: (<ImageForm />)
		})
	}
});

FlowRouter.route('/mine',{
	action()
	{
		mount(MainLayout,{
			content: (<ImagenesPersonal />)
		})
	}
});
