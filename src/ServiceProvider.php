<?php

namespace maldicore\StatamicBardDhivehiFonts;

use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/maldicore-bard-dhivehi-fonts.js',
    ];
    
    protected $stylesheets = [
        __DIR__.'/../dist/css/maldicore-bard-dhivehi-fonts.css'
    ];

    protected $publishables = [

    ];

    public function boot()
    {
        parent::boot();
        Augmentor::addMark(DhivehiFontFamily::class);

        $this->publishes([
            __DIR__ . '/../public' => public_path('vendor/maldicore-bard-dhivehi-fonts'),
        ], 'maldicore-bard-dhivehi-fonts');
    }
}
