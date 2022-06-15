<?php

use Illuminate\Database\Seeder;
use App\Tag;

class TagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = ['tag1', 'tag2', 'tag3'];

        foreach($tags as $tag){
            $new_tag = new Tag();
            $new_tag->name = $tag;
            $new_tag->slug = Str::slug($tag);
            $new_tag->save();
        }
    }
}
