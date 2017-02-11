import { Component, OnInit } from '@angular/core';
import { GitHubService } from './services/github.service';
import { Repo } from './models/repo';

@Component({
  selector: 'my-app',
  templateUrl: './layout/index.html'
})

export class AppComponent implements OnInit {
    userName: string ="nguyenvanthucframgia2016"
    repos: Repo[];
    loading: boolean=false;
    errorMessage: string;

    constructor(private githubService: GitHubService) {}

    ngOnInit() {
        this.getRepos();
    }

    public getRepos() {
        this.loading = true;
        this.errorMessage = "";
        this.githubService.getRepositories(this.userName)
            .subscribe(
                (response) => {
                    this.repos = response;
                },
                (error) => {
                    this.errorMessage = error;
                    this.loading = false;
                },
                () => {
                    this.loading = false;
                }
            );
    }
}
