<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    //aggiungo nome e slug nel modello
    protected $fillable = ['name', 'slug'];

    //creo relazione many to many tra post e tag
    public function posts(){
        return $this->belongsToMany('App\Post');
    }
}
