"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var post_service_1 = require("./post.service");
var PostDetailsResolve = (function () {
    function PostDetailsResolve(_postService) {
        this._postService = _postService;
    }
    PostDetailsResolve.prototype.resolve = function (route) {
        return this._postService.getPostDetails(+route.params["postId"]);
    };
    return PostDetailsResolve;
}());
PostDetailsResolve = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostDetailsResolve);
exports.PostDetailsResolve = PostDetailsResolve;
//# sourceMappingURL=post-details-resolve.service.js.map