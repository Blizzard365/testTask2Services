<?php

namespace App\Console\Commands;

use App\Models\Item;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class FetchApiData extends Command
{
    protected $signature = 'fetch:api-data';
    protected $description = 'Fetch data from external API and save to database';

    public function handle()
    {
        $response = Http::get(env('API_URL'));
        $data = $response->json();

        foreach ($data as $itemData) {
            Item::updateOrCreate(
                ['id' => $itemData['id']],
                [
                    'title' => $itemData['title'],
                    'body' => $itemData['body']
                ]
            );
        }

        $this->info('Data fetched and saved to database!');
    }
}
