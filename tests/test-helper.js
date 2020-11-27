import Application from 'octane-files-downloader/app';
import config from 'octane-files-downloader/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
