<?php

namespace maldicore\StatamicBardDhivehiFonts;

use ProseMirrorToHtml\Marks\Mark;

class DhivehiFontFamily extends Mark
{
    protected $markType = 'DhivehiFontFamily';
    protected $tagName = 'span';

    public function matching(): bool
    {
        return $this->mark->type === $this->markType;
    }

    public function tag(): ?array
    {
        $style = 'font-family: ';
        switch ($this->mark->attrs->key) {
            case 'alh-mv-a-waheed':
                $style .= 'MVAWaheed;';
            break;

            case 'alh-faruma':
                $style .= 'Faruma;';
            break;

            case 'alh-a-faruma':
                $style .= 'AFaruma;';
            break;

            case 'alh-mv-iyyu':
                $style .= 'MVIyyu;';
            break;

            case 'alh-mv-galan':
                $style .= 'MVGalan;';
            break;

            case 'alh-mv-faseyha':
                $style .= 'MVFaseyha;';
            break;

            case 'alh-mv-elaaf':
                $style .= 'MVElaaf;';
            break;

            case 'alh-mv-emaan-xp':
                $style .= 'MVEmaanXP;';
            break;

            case 'alh-mv-amaan-xp':
                $style .= 'MVAmaanXP;';
            break;

            case 'alh-faagathi-dheli':
                $style .= 'FaagathiDheli;';
            break;
        }

        return [
            [
                'tag'   => 'span',
                'attrs' => [
                    'class' => 'maldicore-dhivehi-fonts',
                    'style' => $style
                ],
            ],
        ];
    }
}